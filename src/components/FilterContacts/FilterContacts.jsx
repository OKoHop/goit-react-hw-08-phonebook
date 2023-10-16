import { useDispatch } from 'react-redux';
import { StyledInput } from 'components/FilterContacts/FilterContacts.style';
import { filterChange } from 'redux/phonebook/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <StyledInput
      type="text"
      name="filter"
      onChange={evt => {
        dispatch(filterChange(evt.target.value));
      }}
    />
  );
};
