import React, { useEffect, useState } from "react";
import ProfileButton from "../header/ProfileButton";
import {
  EyeOutlined,
  BookOutlined,
  ProfileOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Space, Typography } from "antd";
import DashboardCard from "./DashboardCard";

export default function Dashboard() {
  const [isVertical, setIsVertical] = useState(window.innerWidth < 768);
  const [userId, setUserId] = useState("");
  const [summary, setSummary] = useState({
    viewers: 0,
    totalPosted: 0,
    booked: 0,
    revenue: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 1119);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);

    if (storedUserId) {
      fetch(`https://accofinderbackend-1.onrender.com/api/user-summary/${storedUserId}`)
        .then((res) => res.json())
        .then((data) => setSummary(data))
        .catch((err) => console.error("Error fetching summary:", err));
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center max-w-full p-4">
      <ProfileButton />
      <Typography.Title level={3}>User ID: {userId}</Typography.Title>
      <Space
        size={20}
        direction={isVertical ? "vertical" : "horizontal"}
        style={{ width: "80%", justifyContent: "center" }}
      >
        <DashboardCard
          icon={
            <EyeOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Viewers"}
          value={summary.viewers}
        />
        <DashboardCard
          icon={
            <ProfileOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Total Posted"}
          value={summary.totalPosted}
        />
        <DashboardCard
          icon={
            <BookOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Booked"}
          value={summary.booked}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={`MWK${summary.revenue}`}
        />
      </Space>
    </div>
  );
}
