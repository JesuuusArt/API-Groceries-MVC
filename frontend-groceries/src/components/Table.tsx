import { Employee } from "../types";
import api from "../services/api";

interface TableProps {
    employees: Employee[];
    onDelete: () => void;
    onEdit: (employee: Employee) => void;
}

export const Table = ({ employees, onDelete, onEdit }: TableProps) => {
    const handleDelete = async (employee_number: string) => {
        if (window.confirm("¿Eliminar este empleado?")) {
            try {
                await api.delete(`/groceries/employees/deleteOne/${employee_number}`);
                onDelete();
            } catch (error) {
                alert("Error al eliminar empleado");
            }
        }
    };

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Número</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Email</th>
                        <th>Salario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.employee_number}>
                            <td>{employee.employee_number}</td>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.age}</td>
                            <td>{employee.email}</td>
                            <td>${employee.salary.toFixed(2)}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-sm btn-warning"
                                        onClick={() => onEdit(employee)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(employee.employee_number)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {employees.length === 0 && (
                        <tr>
                            <td colSpan={7} className="text-center text-muted py-4">
                                No hay empleados registrados
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};