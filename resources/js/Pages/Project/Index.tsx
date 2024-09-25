import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Projects } from "./type/type";
import React from "react";
import Pagination from "@/Components/Pagination";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constant";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";

type QueryParamsType = {
    [status: string]: string | number;
};

interface ProjectProps {
    projects: Projects;
    queryParams: QueryParamsType;
}

const Index: React.FC<ProjectProps> = ({ projects, queryParams = null }) => {
    queryParams = queryParams || {};
    // console.log(PROJECT_STATUS_CLASS_MAP["pending"]);
    console.log(queryParams);

    const searchFieldChange = (
        name: string,
        value: string,
        page: number = 1
    ): void => {
        queryParams[page] = page;
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("project.index"), queryParams);
    };

    const onKeyPress = (name: string, e: any) => {
        if (e.key !== "Enter") return;
        searchFieldChange(name, e.target.value);
    };
    const sortChanged = (name: string): void => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("project.index"), queryParams);
    };

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
                        <TableHeading
                            name="id"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            ID
                        </TableHeading>
                        <th className="px-3 py-3">Image</th>
                        <TableHeading
                            name="name"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Name
                        </TableHeading>

                        <TableHeading
                            name="status"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Status
                        </TableHeading>

                        <TableHeading
                            name="created_at"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Create Date
                        </TableHeading>

                        <TableHeading
                            name="due_date"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Due Date
                        </TableHeading>
                        <th className="px-3 py-3">Created By</th>
                        <th className="px-3 py-3">Actions</th>
                    </tr>
                </thead>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-nowrap">
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3">
                            <TextInput
                                defaultValue={queryParams.name}
                                className="w-full"
                                placeholder="Project Name"
                                onBlur={(
                                    e: React.FocusEvent<HTMLInputElement>
                                ) => searchFieldChange("name", e.target.value)}
                                onKeyDown={(
                                    e: React.KeyboardEvent<HTMLInputElement>
                                ) => onKeyPress("name", e)}
                            />
                        </th>
                        <th className="px-3 py-3">
                            <SelectInput
                                defaultValue={queryParams.status}
                                className="w-full"
                                onChange={(e) =>
                                    searchFieldChange("status", e.target.value)
                                }
                            >
                                <option value="">Status</option>
                                <option value="pending">Pending</option>
                                <option value="in_progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </SelectInput>
                        </th>
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3"></th>
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
                            {/* <td className="px-3 py-2">{project.status}</td> */}
                            <td className="px-3 py-2">
                                <span
                                    className={
                                        "px-2 py-1 rounded text-white " +
                                        PROJECT_STATUS_CLASS_MAP[project.status]
                                    }
                                >
                                    {PROJECT_STATUS_TEXT_MAP[project.status]}
                                </span>
                            </td>
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
