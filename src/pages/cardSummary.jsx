import React from 'react';
import './styles/sass/cardSummary.sass'
import PROFILE from './styles/img/Profile.png'
import TITELEDUCATION from './styles/img/titleEducation.png'
import EDUCATIONICON from './styles/img/Education.png'
import AGE from './styles/img/age.png'
import TELEPHONE from './styles/img/telephone.png'
import EMAIL from './styles/img/email.png'
import CITY from './styles/img/city.png'
import HOME from './styles/img/home.png'
import CHECK_MARK from './styles/img/check-mark.png'
import VK from './styles/img/vk.png'
import TELEGRAM from './styles/img/telegram.png'
import DISCORD from './styles/img/discord.png'
import ELLIPSE from './styles/img/Ellipse.png'
import DIAGRAM from './styles/img/Diagram.png'
import ADDITIONALLY from './styles/img/additionally.png'
import './styles/components/progress'

const cardSummary = () => { 
    return ( 
        <div className='mainSumarry'>
            <div className='Summarry-Container'>
                <div className='img-profile'>
                    <img src={PROFILE} alt="Изображение не найдено"/>
                </div>
                <div className='main-Content'>
                    <div className='Content-Container'>
                        <div className='text-NLM'>
                            <p>Любовощин</p>
                            <p>Андрей Сергеевич</p>
                        </div>
                            <div className='personal-Container'>
                            <div className='personal-secondary'>
                                <p>Личные данные</p>
                            </div>
                        </div>
                        <div className='main-personalInfo'>
                            <div className='personal-age'>
                                <img src={AGE} alt='Картинка не найдена'/>
                            <p>Возраст: 21 год (30.09.2002)</p>
                            </div>
                            <div className='personal-telephone'>
                                <img src={TELEPHONE} alt='Картинка не найдена'/>
                                <p>Телефон: +79371318706</p>
                            </div>
                            <div className='personal-email'>
                                <img src={EMAIL} alt='Картинка не найдена'/>
                                <p>Email: bake30@yandex.ru</p>
                            </div>
                            <div className='personal-city'>
                                <img src={CITY} alt='Картинка не найдена'/>
                                <p>Проживание: Астрахань (АО)</p>
                            </div>
                            <div className='personal-home'>
                                <img src={HOME} alt='Картинка не найдена'/>
                                <p>Гражданство: Россия</p>
                            </div>
                        </div>
                        <div className='qualities-Container'>
                            <div className='personal-qualities'>
                                <p>Личные качества</p>
                            </div>
                        </div>
                        <div className='personal-qualitiesInfo'>
                            <div className='Purposeful'>
                                <img src={CHECK_MARK} alt='Картинка не найдена'/>
                                <p>Целеустремлённый</p>
                            </div>
                            <div className='Sociabl'>
                                <img src={CHECK_MARK} alt='Картинка не найдена'/>
                                <p>Коммуникабельный</p>
                            </div>
                            <div className='Responsible'>
                                <img src={CHECK_MARK} alt='Картинка не найдена'/>
                                <p>Отвественный</p>
                             </div>
                            <div className='Attentive'>
                                <img src={CHECK_MARK} alt='Картинка не найдена'/>
                                <p>Внимательный</p>
                            </div>
                            <div className='Creative'>
                                <img src={CHECK_MARK} alt='Картинка не найдена'/>
                                <p>Креативный</p>
                            </div>
                        </div>
                        <div className='social-Container'>
                            <div className='social-network'>
                                <p>Социальные сети</p>
                            </div>
                        </div>
                        <div className='social-networkIcon'>
                            <a href='https://vk.com/narvik_tm'>
                                <img src={VK} alt='Картинка не найдена'/>
                            </a>
                            <a href='https://t.me/Narvik_tm'>
                                <img src={TELEGRAM} alt='Картинка не найдена'/>
                            </a>
                            <a href='https://discord.gg/XvH6gTnH6G'>
                                <img src={DISCORD} alt='Картинка не найдена'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='title-Container'>
                    <div className='title-img'>
                        <img src={TITELEDUCATION} alt='Изображение не найдено'/>
                    </div>
                    <div className='titleEducation'>
                        <img src={EDUCATIONICON} alt='Изображение не найдено'/>
                        <h3>ОБРАЗОВАНИЕ</h3>
                    </div>
                    <div className='education-Container'>
                        <div className='text-education'>
                            <p>АГАСУ. Диплом бакалавра по специальности</p>
                            <p>«Информационные системы и технологии в</p>
                            <p>архитектуре и строительстве».</p>
                                <div className='text-border'>
                                    <p>30.</p>
                                    <p>09.</p>
                                    <p>2024г.</p>
                                </div>
                        </div>
                        
                    </div>
                        <div className='Skills-Container'>
                            <div className='title-Container'>
                                <div className='title-Skills'>
                                    <img src={ELLIPSE} alt='Картинка не найдена'/>
                                    <p>НАВЫКИ</p>
                                </div>
                            </div>
                            <div className='Skills-list'>
                                <div className='Skills'>
                                    <ul className='skill-name'>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Java</li>
                                        <li>Python</li>
                                    </ul>
                                    <div className='skill-progress'>
                                        <div className='progress'>
                                            <div className='HTML-bar'></div>
                                        </div>
                                        <div className='progress'>
                                            <div className='CSS-bar'></div>
                                        </div>
                                        <div className='progress'>
                                            <div className='JavaScript-bar'></div>
                                        </div>
                                        <div className='progress'>
                                            <div className='Java-bar'></div>
                                        </div>
                                        <div className='progress'>
                                            <div className='Python-bar'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='Skills'>
                                    <ul className='skill-name'>
                                        <li>BootStrap</li>
                                        <li>React</li>
                                        <li>Jquery</li>
                                        <li>Node.js</li>
                                        <li>SQL</li>
                                    </ul>
                                    <div className='skill-progress'>
                                        <div className='progress'>
                                            <div className='BootStrap-bar'></div>
                                        </div>
                                        <div className='progress'>
                                            <div className='React-bar'></div>
                                        </div>
                                        <div className='progress'>
                                            <div className='Jquery-bar'></div>
                                        </div>
                                        <div className='progress'>
                                            <div className='Node-bar'></div>
                                        </div>
                                        <div className='progress'>
                                            <div className='SQL-bar'></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='title-Container'>
                                <div className='title-lang'>
                                    <img src={ELLIPSE} alt='Картинка не найдена'/>
                                    <p>Языки</p>
                            </div>
                            </div>
                            <div className='lang-skills'>
                                <div className='lang-name'>
                                    <ul>
                                        <li>Русский</li>
                                    </ul>
                                    <div className='lang-progress'>
                                        <div className='progress'>
                                            <div className='Russion-bar'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lang-name'>
                                    <ul className='lang-name'>
                                        <li>Английский</li>
                                    </ul>
                                    <div className='lang-progress'>
                                        <div className='progress'>
                                            <div className='English-bar'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main-Additionally'>
                                <div className='Additionally-Skills'>
                                    <div className='title-exp'>
                                        <img src={ELLIPSE} alt='Картинка не найдена'/>
                                        <p>Опыт работы</p>
                                    </div>
                                    <div className='exp-Diagram'>
                                        <img src={DIAGRAM} alt='Картинка не найдена'/>
                                    </div>
                                </div>
                                <div className='Additionally-Skills'>
                                    <div className='title-additionally'>
                                        <img src={ELLIPSE} alt='Картинка не найдена'/>
                                        <p>Дополнительно</p>
                                    </div>
                                    <div className='additionally-program'>
                                        <img src={ADDITIONALLY} alt='Картинка не найдена'/>
                                    </div>
                                </div>
                            </div>
                            
                        </div> 
                </div>
            </div>
    </div>
    );
}
export default cardSummary; 


