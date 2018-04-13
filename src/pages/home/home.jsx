import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import lang from '../../lang/en';
 
import Input from '../../_components/Input/Input';
import Icon from '../../_components/Icon/Icon';

import {
  Wrap,

  SearchBlock,
  SearchTitle,
  SearchFieldWrap,
  SearchResults,
  SearchResult,
} from './home.styled';

class Home extends React.Component {
  componentDidMount() {
    const { subreddits, loadSubreddits } = this.props;
    subreddits.isInitialLoading && loadSubreddits();
  }


  render() {
    const { subreddits, filterSubreddits } = this.props;

    return (
      <Wrap>
        <SearchBlock>
          <SearchTitle>{lang.home.searchTitle}</SearchTitle>
          <SearchFieldWrap>
            <Field
              name="search"
              component={Input}
              type="search"

              onChange={filterSubreddits}
            />
          </SearchFieldWrap>
          <SearchResults>
            <Icon type='plus' />
            {subreddits.list.filter(_ => _.filterVisible === true).map(subreddit => (
              <SearchResult to={'/subreddits/' + subreddit.name} key={subreddit.id}>{subreddit.title}</SearchResult>
            ))}
          </SearchResults>
        </SearchBlock>
      </Wrap>
    );
  }
}

Home.propTypes = {};

export default reduxForm({ form: 'subreddit' })(Home);
