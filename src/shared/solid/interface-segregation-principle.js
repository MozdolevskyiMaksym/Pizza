import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users, onUserSelect }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-list__item">
          <div className="user-list__name">{user.name}</div>
          <button
            className="user-list__select-button"
            onClick={() => onUserSelect(user.id)}
          >
            Select User
          </button>
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onUserSelect: PropTypes.func.isRequired,
};

export default UserList;

// В этом компоненте мы разделили интерфейсы для отображения списка пользователей и для выбора пользователя.
// Интерфейс для отображения списка пользователей включает только свойство users, а интерфейс для выбора пользователя включает только обработчик событий onUserSelect.
