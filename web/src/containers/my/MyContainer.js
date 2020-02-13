import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { listLivestockId } from '../../../lib/api/livestock';
import { listBarnId } from '../../../lib/api/barn';
import My from '../../components/my/My';

const MyContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const getLivestockIds = async b_id => {
    try {
      return await listLivestockId(b_id);
    } catch (e) {
      console.log(e)
    }
  };

  const getBarnIds = async m_id => {
    try {
      return await listBarnId(m_id);
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <My 
      m_id={user['m_id']}
      getLivestockIds={getLivestockIds}
      getBarnIds={getBarnIds}
    />
  );
};

export default MyContainer;