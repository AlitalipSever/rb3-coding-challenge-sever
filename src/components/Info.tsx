function Info() {
  return (
    <div>
      <h1 style={{ color: "#f6931e" }}>
        Welcome to the RiseFX Coding Challenge
      </h1>
      <p>
        As part of the interview process for the full stack developer position,
        we would like you to complete this coding challenge.
      </p>
      <h2 style={{ color: "#f6931e" }}>
        Create an interactive table that displays data from a GraphQL endpoint
        and implement at least two of the following features:
      </h2>
      <ul>
        <li>
          <b>Sorting by column</b> - Allow the user to sort the table data by a
          specific column in ascending or descending order.
        </li>
        <li>
          <b>Filtering by different fields</b> - Allow the user to filter the
          table by different fields, such as name or date.
        </li>
        <li>
          <b>Pagination</b> - Allow the user to navigate through the table using
          pagination.
        </li>
        <li>
          <b>Selecting which columns to display</b> - Allow the user to select
          which properties of the data to display in the table.
        </li>
        <li>
          <b>Reordering columns</b> - Allow the user to reorder the columns in
          the table.
        </li>
        <li>
          <b>Changing column widths</b> - Allow the user to change the width of
          the columns in the table.
        </li>
      </ul>
      <p>
        While we we only ask that you attempt to implement two, additionally, we
        would like you to consider how you would approach implementing any
        features you did not include, as we may discuss this during the
        interview.
      </p>
      <p>
        You are welcome to come up with and implement your own additional
        features if you would like to.
      </p>
      <p style={{ color: "#f6931e" }}>
        <b>We expect you to spend about 2 - 3 hours on this challenge.</b>
      </p>
      <h3>Additional Information</h3>
      <ul>
        <li>
          The data is coming from the public{" "}
          <a href="https://github.com/graphql/swapi-graphql">
            GraphQL Star Wars API
          </a>
        </li>
        <li>
          Use <b>ReactJS</b> and <b>TypeScript</b> to complete the challenge.
        </li>
        <li>Feel free to refactor the existing code.</li>
        <li>
          When your are done, zip up your results and send them back to our
          recruiter.
        </li>
      </ul>
      <p>
        <b>We look forward to seeing your work!</b>
      </p>
      <hr />
      <br />
    </div>
  );
}

export default Info;
