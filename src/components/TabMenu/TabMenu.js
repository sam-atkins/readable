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
  sortByHighestVotes,
  sortByLowestVotes,
  sortByNewest,
  sortByOldest,
}) => (
  <TabMenuList>
    <TabMenuItem onClick={() => sortByNewest()}>new</TabMenuItem>
    <TabMenuItemSeparator />
    <TabMenuItem onClick={() => sortByOldest()}>old</TabMenuItem>
    <TabMenuItemSeparator />
    <TabMenuItem onClick={() => sortByHighestVotes()}>top</TabMenuItem>
    <TabMenuItemSeparator />
    <TabMenuItem onClick={() => sortByLowestVotes()}>low</TabMenuItem>
  </TabMenuList>
);

TabMenu.propTypes = {
  sortByHighestVotes: PropTypes.func.isRequired,
  sortByLowestVotes: PropTypes.func.isRequired,
  sortByNewest: PropTypes.func.isRequired,
  sortByOldest: PropTypes.func.isRequired,
};

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

export default connect(null, mapDispatchToProps)(TabMenu);
