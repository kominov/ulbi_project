import { Counter } from 'entities/Counter';
import cls from './Main.module.scss';

function MainAbout() {
    return (
        <div className={cls.mainPage}>
            <Counter />
        </div>
    );
}

export default MainAbout;
