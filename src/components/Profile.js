import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Profile.css';

const Profile = () => {
    const isChecked = useSelector((state) => state.profile.isChecked);
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);

    const handleCheckboxChange = () => {
        dispatch({ type: 'TOGGLE_CHECKBOX' });
        setShowPopup(!isChecked);
    };

    const randomMessages = [
        "Добро пожаловать на страницу настроек!",
        "Настройки были обновлены.",
        "Профиль успешно сохранен.",
        "Выберите дополнительные опции.",
    ];

    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];

    return (
        <div className="profile-page">
            <h1>Страница профиля</h1>
            <div className="profile-settings">
                <label className="styled-checkbox">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-custom">
                        <span className="checkbox-inner"></span>
                    </span>
                    <span className="checkbox-label">Показать настройки профиля</span>
                </label>
                {isChecked && (
                    <div className="sub-checkboxes">
                        <label>
                            <input type="checkbox" />
                            Дополнительная опция 1
                        </label>
                        <label>
                            <input type="checkbox" />
                            Дополнительная опция 2
                        </label>
                        <label>
                            <input type="checkbox" />
                            Дополнительная опция 3
                        </label>
                    </div>
                )}
                {showPopup && (
                    <div className="popup">
                        <p>{randomMessage}</p>
                        <button onClick={() => setShowPopup(false)}>Закрыть</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
