import { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, readMoreUrl } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <span className="position-absolute top-0 end-0  badge rounded-pill bg-danger  ">
              {this.props.By}
            </span>
            <img src={imageUrl} className="card-img-top" alt="Not Available" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text my-1">
                <small className="text-muted">
                  {new Date(this.props.publishedAt).toGMTString()}
                </small>
              </p>
              <a
                href={readMoreUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
