import React, { Component, Fragment } from "react";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";
import ActiveRocket from "./ActiveRocket";
import "./Launch.css";

const ROCKET_LAUNCH_QUERY = gql`
  query rocketLaunchQuery {
    launchesPast(limit: 3) {
      rocket {
        rocket {
          cost_per_launch
          country
          description
          diameter {
            meters
          }
          height {
            meters
          }
          id
          name
          active
        }
        rocket_name
      }
      ships {
        name
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Active Rockets</h1>
        <Query query={ROCKET_LAUNCH_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            console.log(data.launchesPast);

            return (
              <Fragment>
                {data.launchesPast.map((el) => {
                  return <ActiveRocket key={el.id} active={el} />;
                })}
              </Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default graphql(ROCKET_LAUNCH_QUERY)(Launch);
