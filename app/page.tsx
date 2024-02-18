import { Col, Row } from "antd"
import Certification from "@/components/certification/page";
import Skills from "@/components/skills/page";
import ProjectsContributor from "@/components/projects-contributor/page";

export default function Home() {
  return (
      <Row gutter={100}> 
        <Col span={20} offset={2}>
          <Certification />
          <Skills />
          <ProjectsContributor />
        </Col>
      </Row>
  );
}