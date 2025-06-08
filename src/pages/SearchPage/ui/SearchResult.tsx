import { Link } from "react-router";
import type { SearchResultType } from "../types";
import dataSource from './../../../assets/data-source.png'
import "./SearchPage.css"


export const SearchResult = ({ result }: { result: SearchResultType }) => {
    const { paperId, title, authors, year, fieldsOfStudy, abstract, citationCount, tldr, isOpenAccess, openAccessPdf } = result;
    return <div className="result">
        <div className="title">
            <Link to={`/graph/${paperId}`}>{title}</Link>
        </div>
        {isOpenAccess && openAccessPdf?.url && 
        <div className="result-property">
            <img src={dataSource} width="30" height="30"></img>
            <span>
                <a href={openAccessPdf.url} target="_blank">Скачать PDF</a>
            </span>
        </div>}
        <div className="result-property">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="36" viewBox="0 0 33 36" fill="none">
                      <path d="M23.4083 18.5587C24.3104 17.659 25.0258 16.59 25.5134 15.4129C26.001 14.2359 26.2512 12.974 26.2496 11.7C26.2496 6.34317 21.9064 2 16.5496 2C11.1928 2 6.84961 6.34317 6.84961 11.7C6.84961 14.3788 7.9352 16.8038 9.6909 18.5587" stroke="black" stroke-width="3" stroke-linecap="round"></path>
                      <path d="M2 34.3333L2.80833 30.2916L11.7 23.825L16.55 28.675L21.4 23.825L30.2917 30.2916L31.1 34.3333" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7.65234 15.7478C7.66285 12.4255 8.20363 9.99809 9.27467 8.46711C10.8816 6.17063 12.0125 6.33957 12.8354 6.69686C13.6591 7.05495 14.1433 9.39184 15.5182 10.066C16.8924 10.7393 20.4119 10.8226 21.6171 11.6333C22.8215 12.4433 25.5779 13.9508 24.8909 16.5246" stroke="black" stroke-width="3"></path>
                    </svg>
            <span>{authors.map(author => <span className="author">{author.name}</span>)}</span>
        </div>
        <div className="result-property">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                      <path d="M17.4993 3.41675C25.5537 3.41675 32.0827 9.94571 32.0827 18.0001C32.0827 26.0545 25.5537 32.5834 17.4993 32.5834C9.44497 32.5834 2.91602 26.0545 2.91602 18.0001C2.91602 9.94571 9.44497 3.41675 17.4993 3.41675ZM17.4993 6.33341C14.4052 6.33341 11.4377 7.56258 9.24977 9.7505C7.06185 11.9384 5.83268 14.9059 5.83268 18.0001C5.83268 21.0943 7.06185 24.0617 9.24977 26.2497C11.4377 28.4376 14.4052 29.6667 17.4993 29.6667C20.5935 29.6667 23.561 28.4376 25.7489 26.2497C27.9369 24.0617 29.166 21.0943 29.166 18.0001C29.166 14.9059 27.9369 11.9384 25.7489 9.7505C23.561 7.56258 20.5935 6.33341 17.4993 6.33341ZM17.4993 9.25008C17.8565 9.25013 18.2013 9.38127 18.4682 9.61862C18.7352 9.85598 18.9057 10.183 18.9475 10.5378L18.9577 10.7084V17.3963L22.9054 21.344C23.1669 21.6065 23.3188 21.9586 23.3301 22.329C23.3414 22.6993 23.2113 23.0601 22.9663 23.338C22.7212 23.6159 22.3796 23.7901 22.0107 23.8252C21.6419 23.8604 21.2735 23.7538 20.9804 23.5272L20.8433 23.4061L16.4683 19.0311C16.2417 18.8043 16.0961 18.509 16.0541 18.1911L16.041 18.0001V10.7084C16.041 10.3216 16.1947 9.95071 16.4682 9.67722C16.7416 9.40373 17.1126 9.25008 17.4993 9.25008Z" fill="black"></path>
                    </svg>
            {year}
        </div>
        {fieldsOfStudy?.length && <div className="result-property">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                      <path d="M2.9 5.8C2.13087 5.8 1.39325 6.10554 0.84939 6.64939C0.305535 7.19325 0 7.93087 0 8.7V26.1C0 27.695 1.305 29 2.9 29H20.3C21.0691 29 21.8068 28.6945 22.3506 28.1506C22.8945 27.6068 23.2 26.8691 23.2 26.1H2.9V5.8ZM26.1 0H8.7C7.93087 0 7.19325 0.305535 6.64939 0.84939C6.10554 1.39325 5.8 2.13087 5.8 2.9V20.3C5.8 21.0691 6.10554 21.8068 6.64939 22.3506C7.19325 22.8945 7.93087 23.2 8.7 23.2H26.1C26.8691 23.2 27.6068 22.8945 28.1506 22.3506C28.6945 21.8068 29 21.0691 29 20.3V2.9C29 2.13087 28.6945 1.39325 28.1506 0.84939C27.6068 0.305535 26.8691 0 26.1 0ZM18.85 20.3H8.7V10.15H18.85V20.3ZM26.1 20.3H21.75V10.15H26.1V20.3ZM26.1 7.25H8.7V2.9H26.1V7.25Z" fill="black"></path>
                    </svg>
            <span>{fieldsOfStudy.map(field => <span className="fieldOfStudy">{field}</span>)}</span>
        </div>}
        <div className="result-property">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                      <path d="M2 28.598H7.69938L28.598 7.69938L22.8979 2L2 22.8986V28.598Z" stroke="black" stroke-width="3" stroke-linejoin="round"></path>
                      <path d="M17.1992 7.69946L22.8986 13.3988" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
            <span>Цитирования: {citationCount}</span>
        </div>
        <div className="result-property">
            <div className="abstract">{abstract}</div>
        </div>
        <div className="result-property">
            {tldr?.text}
        </div>
        
    </div>
}