import { moviesApi, tvApi } from "api";
import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

export default class DetailContainer extends Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = this.props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      isShow: pathname.includes("/show/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie, isShow } = this.state;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return push("/");

    let result = null;

    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.detail(parsedId));
        //result = data;
      } else if (isShow) {
        ({ data: result } = await tvApi.detail(parsedId));
        //result = data;
      } else throw new Error();

      console.log("result : ", result);

      this.setState({ result });
    } catch (error) {
      this.setState({ error: "Can't resolve Detail" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
