import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  TabMenuList,
  TabMenuItem,
  TabMenuItemSeparator,
} from './TabMenu.styles';
import {
  userRequestSortByHighestVote,
  userRequestSortByLowestVote,
  userRequestSortByNew,
  userRequestSortByOld,
} from '../../actions/postActions';

const TabMenu = ({
  highlightTabNewest,
  highlightTabOldest,
  highlightTabHighest,
  highlightTabLowest,
  sortByHighestVotes,
  sortByLowestVotes,
  sortByNewest,
  sortByOldest,
}) => (
  <TabMenuList>
    {highlightTabNewest ? (
      <TabMenuItem highlighted onClick={() => sortByNewest()}>
        new
      </TabMenuItem>
    ) : (
      <TabMenuItem onClick={() => sortByNewest()}>new</TabMenuItem>
    )}
    <TabMenuItemSeparator />
    {highlightTabOldest ? (
      <TabMenuItem highlighted onClick={() => sortByOldest()}>
        old
      </TabMenuItem>
    ) : (
      <TabMenuItem onClick={() => sortByOldest()}>old</TabMenuItem>
    )}
    <TabMenuItemSeparator />
    {highlightTabHighest ? (
      <TabMenuItem highlighted onClick={() => sortByHighestVotes()}>
        top
      </TabMenuItem>
    ) : (
      <TabMenuItem onClick={() => sortByHighestVotes()}>top</TabMenuItem>
    )}
    <TabMenuItemSeparator />
    {highlightTabLowest ? (
      <TabMenuItem highlighted onClick={() => sortByLowestVotes()}>
        low
      </TabMenuItem>
    ) : (
      <TabMenuItem onClick={() => sortByLowestVotes()}>low</TabMenuItem>
    )}
  </TabMenuList>
);

TabMenu.propTypes = {
  highlightTabNewest: PropTypes.bool.isRequired,
  highlightTabOldest: PropTypes.bool.isRequired,
  highlightTabHighest: PropTypes.bool.isRequired,
  highlightTabLowest: PropTypes.bool.isRequired,
  sortByHighestVotes: PropTypes.func.isRequired,
  sortByLowestVotes: PropTypes.func.isRequired,
  sortByNewest: PropTypes.func.isRequired,
  sortByOldest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  highlightTabNewest: state.post.sortPosts.newest,
  highlightTabOldest: state.post.sortPosts.oldest,
  highlightTabLowest: state.post.sortPosts.lowest,
  highlightTabHighest: state.post.sortPosts.highest,
});

const mapDispatchToProps = dispatch => ({
  sortByNewest: () => {
    dispatch(userRequestSortByNew());
  },
  sortByOldest: () => {
    dispatch(userRequestSortByOld());
  },
  sortByHighestVotes: () => {
    dispatch(userRequestSortByHighestVote());
  },
  sortByLowestVotes: () => {
    dispatch(userRequestSortByLowestVote());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TabMenu);
