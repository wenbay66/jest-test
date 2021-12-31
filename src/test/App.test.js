import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../pages/App';

test('第一次點擊 CheckBox 後禁用 button, 第二次點擊後啟用 button', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name: 'Change to blue'} );
  const checkbox = screen.getByTestId('superCheckBox');
  
  // 檢查 colorButton 有沒有被渲染出來
  expect(colorButton).toBeInTheDocument();

  // 檢查第一次渲染時 colorButton 必須是起用狀態
  expect(colorButton).toBeEnabled();

  // 檢查勾選 checkbox 後 colorButton 必須是 disabled
  userEvent.click(checkbox);
  expect(colorButton).not.toBeEnabled();
});








