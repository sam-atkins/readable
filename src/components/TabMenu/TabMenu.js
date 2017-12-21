import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, TabMenuList, TabMenuItem } from './TabMenu.styles';
import {
  userRequestSortByHighestVote,
  userRequestSortByNew,
} from '../../actions/postActions';

const TabMenu = ({ sortByHighestVotes, sortByNewest }) => (
  <Wrapper>
    <TabMenuList>
      <TabMenuItem onClick={() => sortByNewest()}>New</TabMenuItem>
      <TabMenuItem onClick={() => sortByHighestVotes()}>Top</TabMenuItem>
    </TabMenuList>
  </Wrapper>
);

TabMenu.propTypes = {
  sortByHighestVotes: PropTypes.func.isRequired,
  sortByNewest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  sortByNewest: () => {
    dispatch(userRequestSortByNew());
  },
  sortByHighestVotes: () => {
    dispatch(userRequestSortByHighestVote());
  },
});

export default connect(null, mapDispatchToProps)(TabMenu);
