import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, meta = [] }) => <Helmet title={title} meta={meta} />;

export default SEO;
