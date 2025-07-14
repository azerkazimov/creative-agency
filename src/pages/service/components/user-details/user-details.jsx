import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../../components/loading/loading";
import Error from "../../../../components/error/error";
import Button from "../../../../components/ui/button/button";
import "./user-details.css";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! ststus: ${response.status}`);

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    <Loading />;
  }

  if (error || !user) {
    <Error error={error ? error : "Not found user"} />;
  }

  return (
    <main className="user-details-page">
      <section className="user-details-container">
        <div className="container">
          <div className="user-details-wrapper">
            <div className="user-details-card">
              <div className="user-details-header">
                <div className="user-details-avatar">
                  <span>{user?.name.charAt(0).toUpperCase()}</span>
                </div>
                <div className="user-details-title">
                  <div className="user-details-name">
                    <h1>{user?.name}</h1>
                  </div>
                  <div className="user-details-nikname">
                    <span>{user?.username}</span>
                  </div>
                </div>
              </div>
              <div className="user-details-content">
                <div className="user-details-email">
                  <label>Email</label>
                  <span>{user?.email}</span>
                </div>
                <div className="user-details-adress">
                  <label>Adsress</label>
                  <span>{user?.address?.street}</span>
                  <span>{user?.address?.suit}</span>
                  <span>{user?.address?.city}</span>
                  <span>{user?.address?.zipcode}</span>
                </div>
                <div className="user-details-phone">
                  <label>Phone</label>
                  <span>{user?.phone}</span>
                </div>
                <div className="user-details-company">
                  <label>Adsress</label>
                  <span>{user?.company?.name}</span>
                  <span>{user?.compnay?.catchPhrase}</span>
                  <span>{user?.compnay?.bs}</span>
                </div>
              </div>
              <div className="user-details-footer">
                <Link to={"/service"}>
                  <Button className={"btn-white"}>All Users</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
