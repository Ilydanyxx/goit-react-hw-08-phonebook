import React from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from '../../redux/selectors';
import { setFilterValue } from '../../redux/filterSlice';
import { SearchIcon } from '@chakra-ui/icons';

export default function Filter() {
  const value = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <Box mt="4">
      <label>
        Find contacts by name:
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={SearchIcon} color="gray.300" />}
          />
          <Input
            type="text"
            name="filter"
            title="Enter first letters or numbers"
            placeholder="Enter first letters"
            value={value}
            onChange={handleChange}
          />
        </InputGroup>
      </label>
    </Box>
  );
}
