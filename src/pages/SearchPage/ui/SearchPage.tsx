import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { SearchBar } from "../../../widgets/SearchBar/SearchBar";
import './SearchPage.css'
import { fetchSearchResultsFx } from "../store/actions";
import { useUnit } from "effector-react";
import type { FiltersType, SearchResultType } from "../types";
import { SearchResult } from "./SearchResult";
import { Pagination } from 'antd'

export const SearchPage = () => {
    const isLoading = useUnit(fetchSearchResultsFx.pending);

    const { query: queryFromParams, page: pageFromParans = 1 } = useParams();
    const [page, setPage] = useState<number>(Number(pageFromParans));
    const [query, setQuery] = useState<string | undefined>(queryFromParams);
    const [total, setTotal] = useState<number>(0)
    const [results, setResults] = useState<SearchResultType[]>([]);

    const [filters, setFilters] = useState<FiltersType | null>(null);

    const search = () => {
        if (query) {
            fetchSearchResultsFx({ query, page: Number(page), filters }).then((data) => { setResults(data.data); setTotal(data.total) })
        }
    }

    useEffect(() => {
        if (query) {
            search();
        }
    }, [page])

    return <div className="main-content">
        <SearchBar initialValue={queryFromParams} onSearch={search} onChange={setQuery} />
        <div className="filters">

<div className="filter">Годы публикации: <input type="numeric" placeholder="от" onChange={(event) => {
                setFilters((filters) => ({ ...filters, yearFrom: event.target.value }));
            }} />

            <input type="numeric" placeholder="до" onChange={(event) => {
                setFilters((filters) => ({ ...filters, yearTo: event.target.value }));
            }} />
            </div>

            <div className="filter">Публикации с минимальным количеством цитат: <input type="numeric" onChange={(event) => {
                setFilters((filters) => ({ ...filters, minCitations: event.target.value }));
            }} />
            </div>

            <div className="filter">Только с открытым PDF<input type="checkbox" onChange={() => {
                const currentOpenValue = filters?.isOpenAccess;
                setFilters((filters) => ({ ...filters, isOpenAccess: currentOpenValue ? '' : 'true' }));
            }} />
            </div>
        </div>
        {isLoading ? <div className="loading">Загрузка...</div> :
            <>
                <div className={'result-sections'}>
                    <div className={'result-section'}>
                        {results.slice(0, results.length / 2).map(result => <SearchResult result={result} key={result.paperId} />)}
                    </div>
                    <div className={'result-section'}>
                        {results.slice(results.length / 2).map(result => <SearchResult result={result} key={result.paperId} />)}
                    </div>
                </div>
                <Pagination
                    rootClassName="pagination"
                    total={total}
                    onChange={(page) => setPage(page)}
                    defaultPageSize={20}
                    current={page}
                    showSizeChanger={false}
                    align="center"
                    hideOnSinglePage
                />
            </>}
    </div>
}

