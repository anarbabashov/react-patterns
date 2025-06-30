import { useState, useEffect } from "react";

/**
 * @param {React.Component} Component - The component to wrap.
 * @param {string} url - The URL to fetch data from.
 * @returns {React.Component} - The wrapped component.
 */

export const withFetchData = (Component, url) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setIsLoading(true);
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error fetching data');
          }
        })
        .then(data => {
          setData(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }, [url]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <Component data={data} {...props} />;
  }
}

/**
 * Usage:
 * 
 * const UserList = withFetchData(UserList, 'https://api.example.com/users');
 * 
 * const UserList = ({ data }) => <div>{data.map(user => <div key={user.id}>{user.name}</div>)}</div>;
 * 
 * <UserList />
 * 
 */

