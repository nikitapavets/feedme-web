import React from 'react';
import { Field, reduxForm } from 'redux-form';

import lang from '../../lang/en';

import Input from '../../_components/Input/Input';
import Icon from '../../_components/Icon/Icon';

import {
  Wrap,

  AboutBlock,
  AboutTitle,
  AboutDescription,

  SearchBlock,
  SearchTitle,
  SearchFieldWrap,
  SearchResults,
  SearchResult,
  SearchAdd,
} from './home.styled';

class Home extends React.Component {
  componentDidMount() {
    const { subreddits, loadSubreddits } = this.props;
    subreddits.isInitialLoading && loadSubreddits();
  }


  render() {
    const { subreddits, filterSubreddits, modalOpen, modalSend, isVisibleSearchField } = this.props;

    return (
      <Wrap>
        <AboutBlock>
          <AboutTitle>{lang.home.about}</AboutTitle>
          <AboutDescription>{lang.home.description}</AboutDescription>
        </AboutBlock>
        <SearchBlock>
          <SearchTitle>{lang.home.searchTitle}</SearchTitle>
          <SearchFieldWrap>
            {isVisibleSearchField &&
              <Field
                name="search"
                component={Input}
                type="search"

                onChange={filterSubreddits}
              />
            }
            <SearchAdd isVisibleSearchField={isVisibleSearchField} onClick={_ => modalOpen(lang.home.modalNewSubredditTitle, lang.home.modalNewSubredditDescription, modalSend)}>
              <Icon type='plus' />
            </SearchAdd>
          </SearchFieldWrap>
          <SearchResults>
            {subreddits.list.filter(_ => _.filterVisible === true).map(subreddit => (
              <SearchResult to={'/subreddits/' + subreddit.name} key={subreddit.id}>{subreddit.title}</SearchResult>
            ))}
          </SearchResults>
        </SearchBlock>
      </Wrap>
    );
  }
}

export default reduxForm({ form: 'subreddit' })(Home);
