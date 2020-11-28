import React, { Component } from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "api";

export default class TvContainer extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const topRated = await this.getTopRated();
      const popular = await this.getPopular();
      const airingToday = await this.getAiringToday();

      this.setState({
        topRated,
        popular,
        airingToday,
      });
    } catch (error) {
      this.setState({
        error: "Can't find TV shows informations",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  getTopRated = async () => {
    const {
      data: { results },
    } = await tvApi.topRated();
    return results;
  };
  getPopular = async () => {
    const {
      data: { results },
    } = await tvApi.popular();
    return results;
  };
  getAiringToday = async () => {
    const {
      data: { results },
    } = await tvApi.airingToday();
    return results;
  };

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    return (
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
