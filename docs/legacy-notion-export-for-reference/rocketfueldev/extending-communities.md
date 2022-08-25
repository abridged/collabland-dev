# Extending communities

## Goal

Our team is trying to extend the core functionality of the Community resources to enhance the user experience at the [Command Center](https://cc.collab.land)

The current implementation of the communities insight is based on the OpenSearch AWS service events and lives on the [Command Center Insights](https://cc.collab.land/dashboard) page

This current implementation has the downside of requiring users to authenticate with a separate OpenSearch AWS user in order to view the insights, something that is not user-friendly for the moderators of the communities.

Exposing the same data through the API and therefore the SDK we can create an intuitive flow for the moderators to view, review and share community analytics.

The first attempt at that effort is to create an extended version of the `/communities/{id}/stats` endpoint that will provide enhanced analytics about insights into the communities

## Analytics endpoint

A new endpoint under the Community Controller that will clone the functionality of the stats endpoint (`/communities/{id}/stats`)

Endpoint: `/communities/{id}/analytics` 

PRD describing all the functionality and user stories can be found here

[v2 Community Dashboard Analytics PRD](https://docs.google.com/document/d/1qVgAFrI1fn0Bj8VQ8JHOUVE10u1N93CQy1hEtIezyCI/edit?usp=drivesdk)

### Obtaining the community id

ID is an instance of `CommunityID` and the most common format is the `CommunityPK` 

`<COMMUNITY_PLATFORM>#COMM#<COMMUNITY_ID>` 

`<COMMUNITY_ID>` is usually obtained by the `/account/administrated-communities` endpoint

### Response of endpoint

The endpoint should return 3 information about the community

1. See the total members of the community
2. See the token holder users of the community
3. See the current role distribution with the user count of the community