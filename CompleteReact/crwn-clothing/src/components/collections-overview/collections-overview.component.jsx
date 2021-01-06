import React from "react";
import { connect } from "react-redux";

import "./collections-overview.styles.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = ({ shop: { collections } }) => ({
  collections,
});

export default connect(mapStateToProps)(CollectionsOverview);
