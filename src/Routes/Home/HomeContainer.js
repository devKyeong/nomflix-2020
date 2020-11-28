import { moviesApi } from "api";
import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

export default class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  //api 호출하고, data를 가져오고, state가 변경시키면, 새롭게 HomePresenter를 rendering한다.
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();

      console.log(nowPlaying);
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({ error: "Can't find Movies informations." });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
