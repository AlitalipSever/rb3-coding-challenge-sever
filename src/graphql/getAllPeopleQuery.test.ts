import {getAllPeopleQuery} from './getAllPeopleQuery';

it('getGameBlogScreenQuery final query', async () => {
  expect(getAllPeopleQuery).toMatchSnapshot();
});
