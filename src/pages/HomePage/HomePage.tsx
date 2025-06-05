import { Link } from "react-router"
import './HomePage.css'

export const HomePage = () => {
    return <main className="home-page">
        <div className="welcome">
            <span>Добро пожаловать на <span className="hover-name">PapersMatch</span> -<br />
                платформу, которая поможет вам<br />быстро и легко найти релевантные<br />
                статьи и исследования.</span>
        </div>
        <div className="searchbar"></div>
        <div className="hints">Например: <Link to="/search/Вакцинация в Африке/1">Вакцинация в Африке</Link></div>
        <div className="subtext">Присоединяйтесь к PapersMatch и откройте мир знаний!</div>
        <div className="subtext">Введите <Link to="/search/search engine/1">запрос</Link>, 
        выберите статью и <Link to="/graph/10d6778bc45aebcd58d336b4062b935861d2fe8a">исследуйте связанные работы</Link></div>
    </main>
}