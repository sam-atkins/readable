import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, TabMenuList, TabMenuItem } from './TabMenu.styles';
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
  <Wrapper>
    <TabMenuList>
      <TabMenuItem onClick={() => sortByNewest()}>New</TabMenuItem>
      <TabMenuItem onClick={() => sortByOldest()}>Old</TabMenuItem>
      <TabMenuItem onClick={() => sortByHighestVotes()}>Top</TabMenuItem>
      <TabMenuItem onClick={() => sortByLowestVotes()}>Low</TabMenuItem>
    </TabMenuList>
  </Wrapper>
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
