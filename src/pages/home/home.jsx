import React from 'react';
import PropTypes from 'prop-types';

import lang from '../../lang/en'

import {
  Wrap,
  SearchWrap,
  SearchField,
  SearchTitle,
  SearchResults,
  SearchResult,
} from './home.styled';

class Home extends React.Component {
  componentDidMount() {
    const { subreddits, loadSubreddits } = this.props;
    subreddits.isInitialLoading && loadSubreddits();
  }


  render() {
    const { subreddits } = this.props;

    return (
        <Wrap>
          <SearchWrap>
            <SearchTitle>{lang.home.searchTitle}</SearchTitle>
            {/* <SearchField type='search' placeholder={lang.general.search}/> */}
            <SearchResults>
              {subreddits.list.map(subreddit => (
                <SearchResult to={'/subreddits/' + subreddit.name} key={subreddit.id}>{subreddit.title}</SearchResult>
              ))}
            </SearchResults>
          </SearchWrap>
        </Wrap>
    );
  }
}

Home.propTypes = {};

export default Home;
