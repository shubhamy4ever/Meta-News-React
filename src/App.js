import React, { useState } from "react";
import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <LoadingBar
            color="#84f4ff"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
        </div>
        <Route exact path="/">
          <News
            setProgress={setProgress}
            title="Top Headlines"
            newsType="top-headlines?country=in"
          />
        </Route>
        <Route exact path="/business">
          <News
            setProgress={setProgress}
            title="Business"
            newsType="top-headlines?country=in&category=business"
          />
        </Route>
        <Route exact path="/entertainment">
          <News
            setProgress={setProgress}
            title="Entertainment"
            newsType="top-headlines?country=in&category=entertainment"
          />
        </Route>
        <Route exact path="/science">
          <News
            setProgress={setProgress}
            title="science"
            newsType="top-headlines?country=in&category=science"
          />
        </Route>
        <Route exact path="/health">
          <News
            setProgress={setProgress}
            title="Health"
            newsType="top-headlines?country=in&category=health"
          />
        </Route>
        <Route exact path="/sports">
          <News
            setProgress={setProgress}
            title="Sports"
            newsType="top-headlines?country=in&category=sports"
          />
        </Route>
        <Route exact path="/technology">
          <News
            setProgress={setProgress}
            title="Technology"
            newsType="top-headlines?country=in&category=technology"
          />
        </Route>
        <Route exact path="/cryptocurrency">
          <News
            setProgress={setProgress}
            title="Cryptocurrency"
            newsType="everything?q=crytocurrency"
          />
        </Route>
      </Router>
    </>
  );
}
