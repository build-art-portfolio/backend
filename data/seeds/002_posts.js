exports.seed = function(knex) {
  return knex("posts").then(function() {
    return knex("posts").insert([
      {
        url:
          "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 2
      },
      {
        url:
          "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 3
      },
      {
        url:
          "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 4
      },
      {
        url:
          "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 5
      },
      {
        url:
          "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 6
      },
      {
        url:
          "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 7
      },
      {
        url:
          "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 8
      },
      {
        url:
          "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 1
      },
      {
        url:
          "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 2
      },
      {
        url:
          "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 3
      },
      {
        url:
          "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 4
      },
      {
        url:
          "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 5
      },
      {
        url:
          "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 6
      },
      {
        url:
          "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 7
      },
      {
        url:
          "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 8
      },
      {
        url:
          "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 1
      },
      {
        url:
          "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 2
      },
      {
        url:
          "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 3
      },
      {
        url:
          "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 4
      },
      {
        url:
          "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 5
      },
      {
        url:
          "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 6
      },
      {
        url:
          "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 7
      },
      {
        url:
          "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "This is an artistic description of this beautiful piece.",
        userID: 8
      }
    ]);
  });
};
