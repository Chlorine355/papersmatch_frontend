import { Link, useNavigate } from "react-router"
import './HomePage.css'
import { SearchBar } from "../../widgets/SearchBar/SearchBar"

export const HomePage = () => {
    const navigate = useNavigate();
    const redirectToSearch = (value: string) => {
        if (value) navigate(`/search/${value}/1`)
    }

    const hints = ['COVID-19', 'Noam Chomsky', 'Metaphors We Live by', 'Swedish Empire', 'Cats', 'Гарри Поттер', 'Статистика рака', 'Вакцинация в Африке', 'Открытая наука', 'прохождение нейтрино через вещество', 'лесные пожары'];
    const hint = hints[Math.floor(Math.random() * hints.length)];
    return <main className="home-page">
        <div className="welcome">
            <span>Добро пожаловать на <span className="hover-name">PapersMatch</span> -<br />
                платформу, которая поможет вам<br />быстро и легко найти релевантные<br />
                статьи и исследования.</span>
        </div>
        <SearchBar onSearch={redirectToSearch} />
        <div className="hints">Например: <Link to={`/search/${hint}/1`}>{hint}</Link></div>
        <div className="subtext">Присоединяйтесь к PapersMatch и откройте мир знаний!</div>
        <div className="subtext">Введите <Link to="/search/search engine/1">запрос</Link>,
            выберите статью и <Link to="/graph/10d6778bc45aebcd58d336b4062b935861d2fe8a">исследуйте связанные работы</Link></div>

        <div className="plane left"></div>
        <div className="plane right"></div>
    </main>
}