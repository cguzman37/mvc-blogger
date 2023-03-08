exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('comments').del()
      .then(function () {
        // Inserts seed entries
        return knex('comments').insert([
          {id: 1, post_id: 1, user_id: 1, body: 'Great post!'},
          {id: 2, post_id: 1, user_id: 2, body: 'Thanks for sharing!'},
          {id: 3, post_id: 2, user_id: 3, body: 'I have a question about this.'},
          {id: 4, post_id: 2, user_id: 4, body: 'What would you like to know?'},
          {id: 5, post_id: 2, user_id: 3, body: 'Can you explain this in more detail?'},
          {id: 6, post_id: 3, user_id: 5, body: 'This is really helpful, thanks!'},
        ]);
      });
  };
  