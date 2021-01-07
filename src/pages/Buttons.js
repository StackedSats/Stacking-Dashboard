import React from "react";
import { Link } from "react-router-dom";

import { HeartIcon } from "../icons";

import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import CTA from "../components/CTA";

function Buttons() {
  return (
    <>
      <PageTitle>Buttons</PageTitle>

      <CTA />

      <SectionTitle>Dropdown</SectionTitle>

      <SectionTitle>Sizes</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <a href="/" className="btn btn-xl">
          Extra Large
        </a>
        <a href="/" className="btn btn-lg">
          Large
        </a>
        <a href="/" className="btn">
          Regular
        </a>
        <a href="/" className="btn btn-sm">
          Small
        </a>
        <a href="/" className="btn btn-xs">
          Extra Small
        </a>
      </div>

      <SectionTitle>React Link</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Link className="btn btn-primary" to="/app/dashboard">
          Dashboard Link
        </Link>
      </div>

      <SectionTitle>Block Level</SectionTitle>
      <div className="mb-8">
        <Link className="btn btn-primary btn-block" to="/app/dashboard">
          Dashboard Link
        </Link>
      </div>

      <SectionTitle>Colors</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <a href="/" className="btn btn-primary">
          Primary
        </a>
        <a href="/" className="btn btn-secondary">
          Secondary
        </a>
        <a href="/" className="btn btn-success">
          Success
        </a>
        <a href="/" className="btn btn-warning">
          Warning
        </a>
        <a href="/" className="btn btn-error">
          Error
        </a>
      </div>

      <SectionTitle>Soft Colors</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <a href="/" className="btn btn-primary-soft">
          Primary
        </a>
        <a href="/" className="btn btn-secondary-soft">
          Secondary
        </a>
        <a href="/" className="btn btn-success-soft">
          Success
        </a>
        <a href="/" className="btn btn-warning-soft">
          Warning
        </a>
        <a href="/" className="btn btn-error-soft">
          Error
        </a>
      </div>

      <SectionTitle>Outline</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <a href="/" className="btn btn-outline-primary">
          Primary
        </a>
        <a href="/" className="btn btn-outline-secondary">
          Secondary
        </a>
        <a href="/" className="btn btn-outline-success">
          Success
        </a>
        <a href="/" className="btn btn-outline-warning">
          Warning
        </a>
        <a href="/" className="btn btn-outline-error">
          Error
        </a>
      </div>

      <SectionTitle>Link</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <a href="/" className="btn btn-link dark:text-white">
          Regular
        </a>
      </div>

      <SectionTitle>Icon</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <a href="/" className="btn btn-icon btn-primary">
          <span className="mr-2">Regular</span> <HeartIcon></HeartIcon>
        </a>
      </div>
    </>
  );
}

export default Buttons;
