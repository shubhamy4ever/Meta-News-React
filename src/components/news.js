import React, { Component } from "react";
import Newsitem from "./newsitem";
import Loading from "./loading";

export default class News extends Component {
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/${this.props.newsType}&apiKey=bf1a7057f82f48eb952b5754fe31220c&pageSize=100`;
    this.props.setProgress(40);
    let data = await fetch(url);
    this.props.setProgress(65);
    let parsedData = await data.json();
    this.props.setProgress(85);
    this.setState({ articles: parsedData.articles, loading: false });
    this.props.setProgress(100);
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-3">Meta News -{this.props.title}</h1>
        {this.state.loading && <Loading />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    !element.urlToImage
                      ? "https://image.shutterstock.com/image-illustration/not-available-red-rubber-stamp-260nw-586791809.jpg"
                      : element.urlToImage
                  }
                  readMoreUrl={element.url}
                  publishedAt={element.publishedAt}
                  By={!element.source.name ? "anonyomous" : element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
