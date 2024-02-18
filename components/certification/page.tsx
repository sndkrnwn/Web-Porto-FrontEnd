'use client';
import Link from 'next/link';
import { Card , Row, Col, Typography, Image, Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
// assets
import googleLogo from "@/public/image/google.svg"

export default function Certification() {
    const { Title, Text } = Typography;
    const certification = [
        {
            src: googleLogo.src,
            title: "Google Ads Apps Certification",
            organization: "Google",
            dateIssued: "Februari 2024",
            dateExpired: "Februari 2025"
        },
        {
            src: googleLogo.src,
            title: "Google Ads Display Certification",
            organization: "Google",
            dateIssued: "December 2023",
            dateExpired: "December 2024"
        },
        {
            src: googleLogo.src,
            title: "Google Ads Search Certification",
            organization: "Google",
            dateIssued: "December 2023",
            dateExpired: "December 2024"
        },
        {
            src: googleLogo.src,
            title: "Google Analitycs Certification",
            organization: "Google",
            dateIssued: "December 2023",
            dateExpired: "December 2024"
        },
        {
            src: googleLogo.src,
            title: "Introduction to Generative AI",
            organization: "Google",
            dateIssued: "December 2023",
            dateExpired: ""
        },
        {
            src: googleLogo.src,
            title: "Generative AI Fundamentals",
            organization: "Google",
            dateIssued: "December 2023",
            dateExpired: ""
        },
        {
            src: googleLogo.src,
            title: "Introduction to Large Languages Models",
            organization: "Google",
            dateIssued: "December 2023",
            dateExpired: ""
        },
        {
            src: googleLogo.src,
            title: "Introduction to Responsible AI",
            organization: "Google",
            dateIssued: "December 2023",
            dateExpired: ""
        }
    ]

    return (
        <>
            <Title style={{ fontSize: "24px" }}>Certifications</Title>
            <Row>
                {
                    certification.map((item, i) => {
                        return (
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} key={i}>
                                <Card hoverable style={{ textAlign: "center", borderRadius: "0" }}>
                                    <Image 
                                        src={item.src}
                                        width={100}
                                        height={100}
                                        alt={item.title}
                                        preview={false}
                                    />
                                    <div style={{
                                        marginBottom: "16px"
                                    }}>
                                        <Title style={{ fontSize: "18px"}}>{item.title}</Title>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                        >
                                            <Text 
                                                style={{ 
                                                    textAlign: item.dateExpired.length > 0 ? "left" : "center",
                                                    width:  item.dateExpired.length > 0 ? "inherit" : "100%"
                                                }}
                                            >Issued <b>{item.dateIssued}</b></Text>
                                            {
                                                item.dateExpired.length > 0 ? <Text>Expired <b>{item.dateExpired}</b></Text> : null
                                            }
                                        </div>
                                    </div>
                                    <Link  href="https://skillshop.exceedlms.com/student/award/D3tQk3iwNcXNCeDfaM9eKpAa" target="_blank" >
                                        <Button shape="round">
                                            Show Credentials
                                            <ExportOutlined />
                                        </Button>
                                    </Link>
                                    
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}