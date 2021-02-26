import React, { useState } from "react";
import { Table, Modal } from "antd";
import data from "../TestJson.json";
import { Link } from "react-router-dom";
function UserListView() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  function showModal() {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function setCurrentUserData(user) {
    setCurrentUser(user);
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "real_name",
      render: (name, item, i) => {
        return (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCurrentUserData(item);
              showModal();
            }}
          >
            {item.real_name}
          </span>
        );
      },
    },
    { title: "ID", dataIndex: "id" },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data.members} />
      {currentUser && (
        <Modal
          title="User Details"
          visible={isModalVisible}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{currentUser.real_name}</p>
          {currentUser.id &&
            currentUser.activity_periods.length &&
            currentUser.activity_periods.map((item) => {
              return (
                <div>
                  <p>{item.start_time}</p>
                  <p>{item.end_time}</p>
                </div>
              );
            })}
          <Link to="/calender">
            <p>View All</p>
          </Link>
        </Modal>
      )}
    </div>
  );
}
export default UserListView;
