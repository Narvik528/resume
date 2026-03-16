import React from 'react';
import './styles/sass/cardPortfolio.sass'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import TITELEPORTFOLIO from './styles/img/titleEducation.png'
import PORTFOLIOICON from './styles/img/PortfolioIcon.png'
import DIPLOMEIMG from './styles/img/Diplome-img.png'
import MINECRATFIMG from './styles/img/Minecraft-img.png'
import TRIANGLE from './styles/img/triangle.png'
import ARROWBOTTOM from './styles/img/Arrow-bottom.png'

const cardPortfolio = () => { 
    return ( 
            <div className='Portfolio-Container'>
                <div className='titlePortfolio-img'>
                    <img src={TITELEPORTFOLIO} alt='Картинка не найдена'/>
                    <div className='titlePortfolio'>
                        <img src={PORTFOLIOICON} alt='Картинка не найдена'/>
                        <h3>Портфолио работ</h3>
                </div>
                </div>
                <div className='works'> 
                    <div className='work'>
                        <div className='name-work'>
                            <p>Дипломная работа</p>
                        </div>
                            <div className='work-Container'>
                                <div className='work-img'>
                                    <img src={DIPLOMEIMG} alt='Картинка не найдена'/>
                                </div> 
                                <div className='Two-button'>
                                    <Popup trigger={
                                        <div className='button-details'>
                                            <p>Подробней</p>
                                            <img src={TRIANGLE} alt='Картинка не найдена'/>
                                        </div>
                                    } modal nested>
                                        <div className='diplomDetails-Container'>
                                            <div className='diplome-topic'>
                                                <p>Тема дипломной работы</p>
                                            </div>
                                            <div className='diplome-name'> 
                                                <p>Web приложение по составлению технического задания</p>
                                                <p>для строительных объектов</p>
                                            </div>
                                            <div className='diplome-description'> 
                                                <p>Описание ещё не добавлено</p>
                                            </div>
                                            <ul className='Diplome-status'>
                                                <li>Статус:  <span>в разработке</span></li>
                                            </ul>

                                        </div>
                                    </Popup>
                                    <Popup trigger={
                                        <div className='button-go'>
                                            <p>Перейти</p>
                                            <img src={ARROWBOTTOM} alt="Картинка не найдена" />
                                        </div>
                                    } modal nested>
                                        <div className='diplomeGo-Container'>
                                            <div className='go-text'>
                                                <p>Работа ещё не добавлена</p>
                                                <p>Проект находится в разработках!</p>
                                            </div>
                                        </div>
                                    </Popup>
                                </div>
                            </div>
                    </div>
                    <div className='work'>
                        <div className='name-work'>
                            <p>Minecraft проект</p>
                        </div>
                            <div className='work-Container'>
                                <div className='work-img'>
                                    <img src={MINECRATFIMG} alt='Картинка не найдена'/>
                                </div> 
                                <div className='Two-button'>
                                    <Popup trigger={
                                        <div className='button-details'>
                                            <p>Подробней</p>
                                            <img src={TRIANGLE} alt='Картинка не найдена'/>
                                        </div>
                                    } modal nested>
                                        <div className='minecraft-text'>
                                                <p>Данных по проекту пока не добавлено</p>
                                            </div>
                                    </Popup>
                                    <Popup trigger={
                                        <div className='button-go'>
                                            <p>Перейти</p>
                                            <img src={ARROWBOTTOM} alt="Картинка не найдена" />
                                        </div>
                                    } modal nested>
                                      <div className='diplomeGo-Container'>
                                            <div className='go-text'>
                                                <p>Работа ещё не добавлена</p>
                                                <p>Проект находится в разработках!</p>
                                            </div>
                                        </div>      
                                    </Popup>
                                </div>
                            </div>
                    </div>
                    <div className='work'>
                        <div className='name-work'>
                            <p>СКОРО</p>
                        </div>
                            <div className='work-Container'>
                                <div className='work-img'>
                                    <img src='' alt='Картинка не найдена'/>
                                </div> 
                                <div className='Two-button'>
                                    <div className='button-details'>
                                        <p>Подробней</p>
                                        <img src={TRIANGLE} alt='Картинка не найдена'/>
                                    </div>
                                    <div className='button-go'>
                                        <p>Перейти</p>
                                        <img src={ARROWBOTTOM} alt="Картинка не найдена" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='work'>
                        <div className='name-work'>
                            <p>СКОРО</p>
                        </div>
                            <div className='work-Container'>
                                <div className='work-img'>
                                    <img src='' alt='Картинка не найдена'/>
                                </div> 
                                <div className='Two-button'>
                                    <div className='button-details'>
                                        <p>Подробней</p>
                                        <img src={TRIANGLE} alt='Картинка не найдена'/>
                                    </div>
                                    <div className='button-go'>
                                        <p>Перейти</p>
                                        <img src={ARROWBOTTOM} alt="Картинка не найдена" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='work'>
                        <div className='name-work'>
                            <p>СКОРО</p>
                        </div>
                            <div className='work-Container'>
                                <div className='work-img'>
                                    <img src='' alt='Картинка не найдена'/>
                                </div> 
                                <div className='Two-button'>
                                    <div className='button-details'>
                                        <p>Подробней</p>
                                        <img src={TRIANGLE} alt='Картинка не найдена'/>
                                    </div>
                                    <div className='button-go'>
                                        <p>Перейти</p>
                                        <img src={ARROWBOTTOM} alt="Картинка не найдена" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='work'>
                        <div className='name-work'>
                            <p>СКОРО</p>
                        </div>
                            <div className='work-Container'>
                                <div className='work-img'>
                                    <img src='' alt='Картинка не найдена'/>
                                </div> 
                                <div className='Two-button'>
                                    <div className='button-details'>
                                        <p>Подробней</p>
                                        <img src={TRIANGLE} alt='Картинка не найдена'/>
                                    </div>
                                    <div className='button-go'>
                                        <p>Перейти</p>
                                        <img src={ARROWBOTTOM} alt="Картинка не найдена" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='work'>
                        <div className='name-work'>
                            <p>СКОРО</p>
                        </div>
                            <div className='work-Container'>
                                <div className='work-img'>
                                    <img src='' alt='Картинка не найдена'/>
                                </div> 
                                <div className='Two-button'>
                                    <div className='button-details'>
                                        <p>Подробней</p>
                                        <img src={TRIANGLE} alt='Картинка не найдена'/>
                                    </div>
                                    <div className='button-go'>
                                        <p>Перейти</p>
                                        <img src={ARROWBOTTOM} alt="Картинка не найдена" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='work'>
                        <div className='name-work'>
                            <p>СКОРО</p>
                        </div>
                            <div className='work-Container'>
                                <div className='work-img'>
                                    <img src='' alt='Картинка не найдена'/>
                                </div> 
                                <div className='Two-button'>
                                    <div className='button-details'>
                                        <p>Подробней</p>
                                        <img src={TRIANGLE} alt='Картинка не найдена'/>
                                    </div>
                                    <div className='button-go'>
                                        <p>Перейти</p>
                                        <img src={ARROWBOTTOM} alt="Картинка не найдена" />
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    );
}

export default cardPortfolio; 