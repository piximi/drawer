import React from 'react';
import { storiesOf } from '@storybook/react';
import { CreateCategoryDialog } from './CreateCategoryDialog';

const createCategory = (color: string, description: string) => {};

const onClose = () => {};

storiesOf('CreateCategoryDialog', module).add('example', () => (
  <CreateCategoryDialog createCategory={createCategory} onClose={onClose} open/>
));