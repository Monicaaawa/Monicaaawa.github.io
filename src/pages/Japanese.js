import React from "react";
import DramaList from "../components/DramaList";

function Japanese() {
    return(
        <div className="content">
            <div className="section">
                <p className="japanese">
                初めまして、葉詩雨と申します。日本語の名前もあるんですけど、みちこと言います。
                趣味は読書、撮影、バドミントン、そしてアニメ鑑賞（？）です。
                どうぞよろしくお願いします。
                </p>
                <DramaList />
            </div>
        </div>
    )
}

export default Japanese;