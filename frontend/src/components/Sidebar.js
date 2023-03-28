import React from 'react';
import style from '../css/Sidebar.module.css';


function Sidebar() {
    return (
        <div className={`${style.container}`}>
            <div>
                <li>
                    <a href="#">&nbsp;</a>
                </li>
                <li>
                    <a href="#">ホーム</a>
                </li>
                <li>
                    <a href="#">見精書</a>
                </li>
                <li>
                    <a href="#">納品書</a>
                </li>
                <li>
                    <a href="#">請求書</a>
                </li>
                <li>
                    <a href="#">受注管理</a>
                </li>
                <li>
                    <a href="#">レポート</a>
                </li>
            </div>
            <div className={`${style.centerBox}`}>
                <li>
                    <a href="#">受信箱</a>
                </li>
            </div>
            <div className={`${style.subBox}`}>
                <li>
                    <a href="#">取引先</a>
                </li>
                <li>
                    <a href="#">品目管理</a>
                </li>
                <li>
                    <a href="#">ご利用履歴</a>
                </li>
                <li>
                    <a href="#">設定</a>
                </li>
            </div>

            <div　className={`${style.bottomBox}`}>
                <li>
                    <a href="#">サポート</a>
                </li>
                <li>
                    <a href="#">マイポータル</a>
                </li>
                <li>
                    <a href="#">ログアウト</a>
                </li>
            </div>

        </div>
    );
}

export default Sidebar;