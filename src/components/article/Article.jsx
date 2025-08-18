import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Save, Trash } from "lucide-react";

import "./Article.css";

export default function Article() {
  const [articles, setArticles] = useState(() => {
    const data = localStorage.getItem("article");
    const parsedData = data ? JSON.parse(data) : { title: "", article: "" };
    return {
      title: parsedData.title,
      article: parsedData.article,
    };
  });

  const [disabled, setDisabled] = useState(true);
  const [siderState, setSiderState] = useState(false);

  useEffect(() => {
    setDisabled(!articles.title || !articles.article);
  }, [articles]);

  function deleteArticles() {
    setArticles({ title: "", article: "" });
    localStorage.removeItem("article");
  }

  function saveArticle() {
    localStorage.setItem("article", JSON.stringify(articles));
  }

  function handleChange(e) {
    setArticles({
      ...articles,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    saveArticle();
  }

  return (
    <div className="article-container">
      {siderState ? (
        <div className="sider">
          <button
            onClick={() => {
              setSiderState(false);
            }}
            className="sider-switcher switcher-left"
          >
            <ChevronLeft className="sider-switcher-icon" />
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="body">
        <button
          onClick={() => {
            setSiderState(true);
          }}
          className="sider-switcher switcher-rigth"
        >
          <ChevronRight className="sider-switcher-icon" />
        </button>

        <form onSubmit={handleSubmit} className="article-field">
          <div className="article-field-upper-line">
            <input
              value={articles.title}
              className="article-title"
              type="text"
              placeholder="ARTICLE TITLE"
              name="title"
              onChange={handleChange}
            />
            <div className="buttons">
              <button
                onClick={handleSubmit}
                type="button"
                className="base-btn"
                disabled={disabled}
              >
                <Save className="btn-icon" /> <span>SAVE</span>
              </button>
              <button
                onClick={deleteArticles}
                type="button"
                className="base-btn"
                disabled={disabled}
              >
                <Trash className="btn-icon" /> <span>DELETE</span>
              </button>
            </div>
          </div>

          <textarea
            onChange={handleChange}
            name="article"
            className="article-body-field"
            value={articles.article}
          ></textarea>
        </form>
      </div>
    </div>
  );
}
