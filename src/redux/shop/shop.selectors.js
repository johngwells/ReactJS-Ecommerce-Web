import { createSelector } from 'reselect';

/* used for line 23. Converted the shop_data to an object
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}; */

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// CollectionsOverview Component was accessing the data before as an
// array. Convert so it can access the new data as an object
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections], 
      (collections) =>
      // collections.find(
      // (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      collections[collectionUrlParam]
  );
