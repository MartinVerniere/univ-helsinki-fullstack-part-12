import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';
import { expect, test, vi } from 'vitest';

test('calls delete when delete clicked', () => {
	const todo = { text: 'Test todo', done: false };
	const deleteMock = vi.fn();

	render(<Todo todo={todo} deleteTodo={deleteMock} completeTodo={() => { }} />);

	fireEvent.click(screen.getByText('Delete'));

	expect(deleteMock).toHaveBeenCalledTimes(1);
})
