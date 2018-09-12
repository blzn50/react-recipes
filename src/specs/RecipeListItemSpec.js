import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RecipeListItem from '../components/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'Test recipe',
  category: 'Test category',
};

describe('<RecipeListItem />', () => {
  test('should not break if no recipe passed', () => {
    const component = renderer.create(<RecipeListItem />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should correctly render recipe', () => {
    const component = renderer.create(<RecipeListItem recipe={testRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('should render favorited state', () => {
    const component = renderer.create(<RecipeListItem recipe={testRecipe} favorited />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should call handleClick when clicked', () => {
    const onHandleClick = jest.fn();
    const component = mount(<RecipeListItem recipe={testRecipe} onHandleClick={onHandleClick} />);
    component.simulate('click');

    expect(onHandleClick.mock.calls.length).toBe(1);
  });

  test('should call onFavorited on favorited', () => {
    const onFavorited = jest.fn();
    const component = mount(<RecipeListItem recipe={testRecipe} onFavorited={onFavorited} />);
    component
      .find('span')
      .first()
      .simulate('click');

    expect(onFavorited.mock.calls.length).toBe(1);
  });

  test('should not call onHandleClick when onFavorited is called', () => {
    const onHandleClick = jest.fn();
    const onFavorited = jest.fn();
    const component = mount(
      <RecipeListItem
        recipe={testRecipe}
        onHandleClick={onHandleClick}
        onFavorited={onFavorited}
      />,
    );
    component
      .find('span')
      .first()
      .simulate('click');

    expect(onHandleClick.mock.calls.length).toBe(0);
    expect(onFavorited.mock.calls.length).toBe(1);
  });
});
