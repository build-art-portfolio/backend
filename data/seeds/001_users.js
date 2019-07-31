exports.seed = function(knex) {
  return knex("users").then(function() {
    return knex("users").insert([
      {
        username: "chris-ian-jones",
        password: "password",
        first_name: "Chris",
        last_name: "Jones",
        email: "cjones@lambdaschool.com",
        profilePhoto:
          "https://lh3.googleusercontent.com/aul_u3et1b4qDEeV4ytdG6UF-tgnrp--Yo5cDvGgxrYYuaEKEAoWzPCoR59muPqe4kwYsNyczt8x1CJDg4yLBp2TWmx-UnetzBXTC7HO88GM7a6muELudVbSkFd4oPeVNQUNiLo14f4Fas03ad3ouTfS378iBVHuYy7DL90ap15ISBKuASd55iR5KcyjbzPjvNyiJcPQf4jY7jWXGU6-8Ls6mSf6dDqF91S5D0xVRvKhPUcB6QKQZdLveSSt0W7vtuRD-QdeRRIs6h5iVPYhbwzy_WQG9zoYUr-YmSnTLVbxEXyeNDIPFUHvHxwB2RJwQjBpX7rHWodKrvX5H6F5vxXqBoXfa-BKp9UdRoT6K9i_8aqXUfFlbbqraPp0eTdZlppp8IaZiFZ4c_zeopVGfiHm8SV0BiDtRA7Lvej7fJYUCUQVRZRVHe4HsBRpLV_MJSQGS3ry31RoSG0iGh6nUoV9hyc5AtSZD2NSKcisA2ZKFFjyEQKiTx4_3aPhz0lj0jJFdLo9L-Qfg8y_QOQWtRPDf7oF6QG8ZFIWhZ1LzWd7f6McaFPbM871H-0vchtawkZwMj-I83r8DAZYhGZs9qso8FsvQwM2vfx61wTaL6nPp0KmCIHHx7ISP_H6N-MX1D-gmeNkiPlo-uu96iUawLpvKHKCFs4TeDUer8bU7TSAt3LRuDa0R7TQ7fo0QMPwl7oNotwiPIj6oSBLiDKPCiA3ag=s640-no"
      },
      {
        username: "ben-solt",
        password: "password",
        first_name: "Ben",
        last_name: "Solt",
        email: "bsolt@lambdaschool.com",
        profilePhoto:
          "https://avatars0.githubusercontent.com/u/52627840?s=460&v=4"
      },
      {
        username: "eleasah-halsmer",
        password: "password",
        first_name: "Eleasah",
        last_name: "Halsmer",
        email: "ehalsmer@lambdaschool.com",
        profilePhoto:
          "https://avatars1.githubusercontent.com/u/44128101?s=460&v=4"
      },
      {
        username: "karl-beksa",
        password: "password",
        first_name: "Karl",
        last_name: "Beksa",
        email: "kbeksa@lambdaschool.com",
        profilePhoto:
          "https://avatars0.githubusercontent.com/u/17229414?s=460&v=4"
      },
      {
        username: "cassandra-springer",
        password: "password",
        first_name: "Cassandra",
        last_name: "Springer",
        email: "cspringer@lambdaschool.com",
        profilePhoto:
          "https://avatars3.githubusercontent.com/u/39530397?s=460&v=4"
      },
      {
        username: "bishop-lake",
        password: "password",
        first_name: "Bishop",
        last_name: "Lake",
        email: "blake@lambdaschool.com",
        profilePhoto:
          "https://avatars2.githubusercontent.com/u/50998248?s=460&v=4"
      },
      {
        username: "myles-azehko",
        password: "password",
        first_name: "Myles",
        last_name: "Azehko",
        email: "mazehko@lambdaschool.com",
        profilePhoto:
          "https://avatars0.githubusercontent.com/u/49720658?s=460&v=4"
      },
      {
        username: "monique-soto",
        password: "password",
        first_name: "Monique",
        last_name: "Soto",
        email: "msoto@lambdaschool.com",
        profilePhoto:
          "https://lh3.googleusercontent.com/aCeLN9B1zY7cmakEGyPdzzDhXgpqC2LMw4nu2_-Wl8oSR3S-onNRA-usYWMqxR9KnzuuFMMw9QpGDxlArHqvXmNTRvglNPy96iQWuf0qCUp0tbFUBY0SswtGkk5WEpIV7gPeqiWJrn2KkaG4UIdaxEvzZkKRNnvClcz_JwmAXsr7XIg-k_GXjKelSzMbMtGLoK0VcUOi_XFnh0fNUCsj4zi17tRPdRXqvE_XZs0nAWWRf4-4a3lkT16jVrvt8k8r8fCVSZ2V4TJ4AUijXihKbcLUsKlH1IziyY8bz8GLptjEQnfGsFLbXthQ4OvJDKQEIcOZxr9WLLUE6cxSnGklwKg3zrY25niYtXbb-2aV8crWBVvsIqUOjzYZI1cblLNYzOkpvY8j5TpXJQhXM_Zt4_COAHseQaajAGghyL2xCE6zUhIcQzZCL9gvxeGD605S92ENH5FVCBLIF2iYkYp9fG8YBfHeTwHZ__2QaowsuuySLNK2B7EtytQ2leX-dJiH9SpYFXYNq3ERsr2cg1wbzNqgc-35ftuy4fZDrFdJFx3SdDnC0QpTIG2lyxuqXmgsxtmnpRJ3XztlEwDVr2LIu35uDQc6aH8gKjcGQ00KBv9DZpzJCc3NfgvylzkbvJfJYFT4z1b4fTJ2TTBQ2-IMqRXrhB32Ms2S8t3QXagbWj0XqY_YGSJCad6Oe9n_XhpJXb7qOlMCT-Fym_QWzwcsFDnWFA=w653-h657-no"
      }
    ]);
  });
};
