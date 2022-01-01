import App2 from '../pages/App2';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('模擬api測試', () => {
  
  test('是否可渲染登錄人員 api', async () => {

    render(<App2/>);
  
    const username = await screen.findByText('Ariean');

    // 測試有沒有取得登陸人員姓名
    expect(username).toBeInTheDocument();

  });

  test('是否可渲染員工清單 api', async () => {

    const { getByText } = render(<App2/>);

    const btn = screen.getByRole('button', /取得員工清單/i);
  
    userEvent.click(btn);

    await waitFor(() => {
      const staffName = getByText('staff01');
      expect(staffName).toBeInTheDocument()
    });

  })

});