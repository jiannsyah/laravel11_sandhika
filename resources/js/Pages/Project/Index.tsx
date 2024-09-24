import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Projects } from "./type/type";
import React from "react";
import Pagination from "@/Components/Pagination";

interface ProjectProps {
    projects: Projects;
}

const Index: React.FC<ProjectProps> = ({ projects }) => {
    console.log(projects);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />
            {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-nowrap">
                        <th className="px-3 py-3">ID</th>
                        <th className="px-3 py-3">Image</th>
                        <th className="px-3 py-3">Name</th>
                        <th className="px-3 py-3">Status</th>
                        <th className="px-3 py-3">Create Date</th>
                        <th className="px-3 py-3">Due Date</th>
                        <th className="px-3 py-3">Created By</th>
                        <th className="px-3 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.data.map((project) => (
                        <tr
                            key={project.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="px-3 py-2">{project.id}</td>
                            <td className="px-3 py-2">
                                <img
                                    src={project.image_path}
                                    alt=""
                                    style={{ width: 60 }}
                                />
                            </td>
                            <td className="px-3 py-2">{project.name}</td>
                            <td className="px-3 py-2">{project.status}</td>
                            <td className="px-3 py-2">{project.created_at}</td>
                            <td className="px-3 py-2">{project.due_date}</td>
                            <td className="px-3 py-2">
                                {project.created_by.name}
                            </td>
                            <td className="px-3 py-2">
                                <Link
                                    href={route("project.edit", project.id)}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                >
                                    Edit
                                </Link>
                                <Link
                                    href={route("project.destroy", project.id)}
                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {projects.meta?.links && (
                <Pagination links={projects.meta?.links ?? undefined} />
            )}
        </AuthenticatedLayout>
    );
};

export default Index;
