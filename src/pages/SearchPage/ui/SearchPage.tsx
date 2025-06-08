import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { SearchBar } from "../../../widgets/SearchBar/SearchBar";
import './SearchPage.css'
import { fetchSearchResultsFx } from "../store/actions";
import { useUnit } from "effector-react";
import type { SearchResultType } from "../types";
import { SearchResult } from "./SearchResult";
import { Pagination } from 'antd'

export const SearchPage = () => {
    const isLoading = useUnit(fetchSearchResultsFx.pending);

    const { query: queryFromParams, page: pageFromParans = 1 } = useParams();
    const [page, setPage] = useState<number>(Number(pageFromParans));
    const [query, setQuery] = useState<string | undefined>(queryFromParams);
    const [total, setTotal] = useState<number>(0)

    const [results, setResults] = useState<SearchResultType[]>([]);

    useEffect(() => {
        if (query) {
            fetchSearchResultsFx({ query, page: Number(page) }).then((data) => { setResults(data.data); setTotal(data.total) })
        }
    }, [query, page])

    console.log(results);
    return <div className="main-content">
        <SearchBar initialValue={queryFromParams} onSearch={setQuery} />
        {isLoading ? <div>Loading</div> :
            <>
                <div className={'result-sections'}>
                    <div className={'result-section'}>
                        {results.slice(0, 10).map(result => <SearchResult result={result} />)}
                    </div>
                    <div className={'result-section'}>
                        {results.slice(10).map(result => <SearchResult result={result} />)}
                    </div>
                </div>
                <Pagination rootClassName="pagination" total={total} onChange={(page) => setPage(page)} defaultPageSize={20} current={page} showSizeChanger={false} align="center" />
            </>}
    </div>
}

